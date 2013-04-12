var CodeJam = require('../'),
    codejam = CodeJam();

codejam.readCase = function() {
    return { g : this.readLine() };
};

codejam.evaluate = function(input) {
    var s = '',
        i, sizeI,
        map = {
            ' ' : ' ',
            a : 'y',
            b : 'h',
            c : 'e',
            d : 's',
            e : 'o',
            f : 'c',
            g : 'v',
            h : 'x',
            i : 'd',
            j : 'u',
            k : 'i',
            l : 'g',
            m : 'l',
            n : 'b',
            o : 'k',
            p : 'r',
            q : 'z',
            r : 't',
            s : 'n',
            t : 'w',
            u : 'j',
            v : 'p',
            w : 'f',
            x : 'm',
            y : 'a',
            z : 'q'
        };

    for (i = 0, sizeI = input.g.length; i < sizeI; ++i) {
        s += map[input.g[i]];
    }

    return s;
};

codejam.run();