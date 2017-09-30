// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBxQxrlJRcxEkWBv6bAzhvNttrnKfPh09I",
    authDomain: "pretty-timeline.firebaseapp.com",
    databaseURL: "https://pretty-timeline.firebaseio.com",
    projectId: "pretty-timeline",
    storageBucket: "pretty-timeline.appspot.com",
    messagingSenderId: "652452531612"
  };
  firebase.initializeApp(config);

var eventRef = firebase.database().ref('events');
eventRef.on('value', function(snapshot) {
  vm.events = snapshot.val();
});

var logs = [
  {
    year: 2014,
    content: [{date:"9月24",tag:"开始写博客"}]
  },
  {
    year: 2015,
    content: [{tag:"成立工作室"}]
  },
  {
    year: 2016,
    content: [{tag:"进入外企"}]
  }
]
    
var vm = new Vue({
    el: "#app",
    data:{
      events: [],
    },
    methods:{
      setTag(lid,cid){
        let text = prompt("请输入新的文字",this.events[lid].content[cid].tag)
      if(text){
        this.events[lid].content[cid].tag = text
        eventRef.child(lid).set(this.events[lid])
        }
      },
      addTag(){
        var k = eventRef.push({
           year: new Date().getFullYear(),
           content:[{
             month: new Date().getMonth() + 1,
             tag: "文字"
           }]
        })
      }
    }
})