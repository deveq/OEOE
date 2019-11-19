var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReportSchema = new Schema({
    id:String,
    Reports:{
        Title: String,
        Contents: String,
        submitTime:Date
      }
});

module.exports = mongoose.model('Report', ReportSchema);
var date1 = new Date(2019, 10, 4, 9);
var date2 = new Date(2019, 10, 11, 9);
var date3 = new Date(2019, 10, 18, 9);
var Report = mongoose.model('Report', ReportSchema);
for(var i=1; i<=10; i++) {
    var newReport1 = new Report({id:'test'+i,Reports:{Title:"title"+i, Contents: "contents"+i, submitTime:date1}});
    var newReport2 = new Report({id:'test'+i,Reports:{Title:"title"+i, Contents: "contents"+i, submitTime:date2}});
    var newReport3 = new Report({id:'test'+i,Reports:{Title:"title"+i, Contents: "contents"+i, submitTime:date3}});
    newReport1.save(function(error, data){
        if(error){
            console.log(error);
        }
    });
    newReport2.save(function(error, data){
        if(error){
            console.log(error);
        }
    });
    newReport3.save(function(error, data){
        if(error){
            console.log(error);
        }
    });
}
