//window.alert("Hello Window alert")
        //alert("Hello Alert")
        var name='Alice'
        //console.log(name)
        //console.log(window.name)
        function add(a,b){
            return a + b
        }

        //console.log(add(1,2))

        //console.log(window.add(2,3))
        function doNothing(){
            return;
        }
        //console.log(doNothing() === undefined)

        function showPrimes(n){
            nextPrime: for(let i=2; i<n; i++){
                for(let j=2;j<i; j++){
                    if( i % j == 0 ) continue nextPrime;
                }

                console.log(i)
            }
        }
