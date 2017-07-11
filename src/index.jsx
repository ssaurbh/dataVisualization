import React from 'react';
import ReactDOM from 'react-dom';
import PieChart from './components/piechart';
import BubbleChart from './components/bubblechart';

var data = {
           "Email":{

                "sender": "sumit",
                "receiver": "abc",
                "subject": "hello",
                "date": "xyz",
                "time": "abdf",
                "message": "hi",
                "attachment": "xxx"

            
        },

         

            "Calendar":{

                "sender": "sumit",
                "receiver": "abc",
                "subject": "hello",
                "date": "xyz",
                "time": "abdf",
                 "message": "hi",
                "attachment": "xxx",
                "location": "xyz"

            
        },

         

            "Courier":{

                "sender": "sumit",
                "receiver": "abc",
                "status": "received",
                "location": "xyz"

            
        },

         

            "Chat":{


                "sender": "sumit",
                "receiver": "abc",
                "status": "idle",
                "date": "xyz",
                "time": "abdf",
                "location": "xyz",
                "message": "helloWorld"


            
        },

         

            "News":{

                "city": "Bangalore",
                "location": "rmnagar",
                "date": "llll",
                "type": "social",
                "message": "Strrike in Bangalore"

            
        },

            "Cab-Request":{

                "location": "blore",
                "date": "mmm",
                "time": "mmmm",
                "drop": "xxxxxx",
                "pickup":"mmm",
                "fare": "98898"

            }
        

}

function loadDataForPieChart(){

  var categories = JSON.parse(JSON.stringify(data));
var unqMap =  new Object();

     for(var key in categories){
          var value = categories[key];
          for(var subKey in value){
              if(unqMap[subKey]){
                    var val = unqMap[subKey];
                    val++;
                    unqMap[subKey] = val;
              }else{
                  unqMap[subKey] = 1;
              }
             
          }
     }

console.log(unqMap);
var objArray = [];
for(var key in categories){
   var obj = {};
   obj['name'] = key;
   var value = categories[key];
   var count =0;
   for(var subKey in value){
        var val = unqMap[subKey];
        count = count+val; 
   }
   obj['count'] = count;
   objArray.push(obj);
}

return objArray;

}

var pieData = loadDataForPieChart();

ReactDOM.render(

<div>
<PieChart data={pieData} title="Total Frequency count for Categories "/>

<BubbleChart title="Detail Frequency count"/>

</div>

,document.getElementById('app')
);


