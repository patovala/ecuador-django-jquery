/*
 *
 * A simple jquery plugin for Ecuadorian cedula (id) validation
 *
 * Author: Pato Valarezo (c) patovala@pupilabox.net.ec
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function($) {
    //mi implementación del algoritmo anterior
    $.fn.validateEC = function() {
        var cedula = this.val();
        if (cedula.length<10) return false;
        var cint = cedula.split("").map(function(a){
            return parseInt(a);
        }); 
        var tester = cint.pop(-1);
        var verificador=0;
        var iidx = [0,2,4,6,8];
        var pidx = [1,3,5,7];
        
        iidx.forEach(function(i){ 
            var tmp = cint[i] * 2;
            
            tmp.toString().split("").forEach(
                function(x){ 
                    verificador += parseInt(x);
                });
        });
        pidx.forEach(function(i){ 
            verificador += cint[i];
        });
        
        if (verificador % 10 == 0 && tester == 0)
            return True;

        return (10 - (verificador % 10) == tester);
    }
})(jQuery);

