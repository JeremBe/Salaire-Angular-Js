function milliers() {

    return function(n) {
      if (n) {
        var string = n.toString();
        var rx = /(\d+)(\d{3})/;
        return String(string.replace(".", ",")).replace(/^\d+/, function(w) {
            while (rx.test(w)) {
                w = w.replace(rx, '$1 $2');
            }
            return w;
        });
      }
      return;
    }
}
