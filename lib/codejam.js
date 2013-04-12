var fs = require('fs'),
    path = require('path');

function CodeJam(opts) {
    if ( ! (this instanceof CodeJam)) {
        return new CodeJam(opts);
    }

    opts || (opts = {});
    this._input = opts.input || process.argv[2];
    if ( ! this._input) {
        throw 'You must specify input file';
    }
    this._input = path.join(process.cwd(), this._input);
    if ( ! fs.existsSync(this._input) ||  ! fs.statSync(this._input).isFile()) {
        throw '"' + this._input + '" must be a file';
    }

    this._output = path.dirname(this._input) + '/' + path.basename(this._input, '.in') + '.out';
    console.log(this._output);
    this._inputLines = [];
    this._outputLines = [];
    this._currentLineNum = 0;
    this._currentCaseNum = 0;

    this._read();
    this._numberOfCase = +this.readLine();
}

CodeJam.prototype.run = function() {
    var tStart = (new Date()).getTime(),
        i, sizeI;

    console.log('Number of cases: %d', this._numberOfCase);
    for (i = 0, sizeI = this._numberOfCase; i < sizeI; ++i) {
        this._currentCaseNum = i + 1;
        console.log('\n=== Case #%d ===', this._currentCaseNum);
        this._currentCaseInput = this.readCase();
        this._currentCaseResult = this.evaluate(this._currentCaseInput);
        console.log('Case result: %s', this._currentCaseResult);
        this.writeCase(this._currentCaseResult);
    }
    console.log('\nTotal time: %d ms', new Date() - tStart);

    this._write();
};

CodeJam.prototype.readLine = function() {
    return this._inputLines[this._currentLineNum++];
};

CodeJam.prototype.writeLine = function(str) {
    this._outputLines.push(str);
};

CodeJam.prototype.evaluate = function(input) {};
CodeJam.prototype.readCase = function() {};

CodeJam.prototype.writeCase = function(result) {
    this.writeLine('Case #' + this._currentCaseNum + ': ' + result);
};

CodeJam.prototype._read = function() {
    this._inputLines = fs.readFileSync(this._input, 'utf8').split('\n');
};

CodeJam.prototype._write = function() {
    fs.writeFileSync(this._output, this._outputLines.join('\n'));
};

module.exports = CodeJam;