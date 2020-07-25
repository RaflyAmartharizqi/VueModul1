 var app = new Vue({
     el : '#app',
     data : {
         'message' : 'Hello World'
     },
     
 });

 var app = new Vue({
    el: "#apps",
    methods: {
        greet: function(name){
            return 'Good Evening, ' + name;
        }
    }
});

var app = new Vue({
    el : '#appp',
    data : {
        "url" : "https://www.fullstackpython.com/img/logos/vuejs-wide.png"
    }
    
});

var nama = new Vue({

    el : '#nama',
    data : {
        "nama" : ""
    }
    }); 


var condition = new Vue({

    el : '#condition',
    data : {
         "itemInStock" : 10
    }
    }); 

var kelas = new Vue({

    el : '#kelas',
    data : {
       "kelas" : ["XRPL1","XRPL2","XRPL3","XRPL4","XRPL5","XRPL6","XRPL7",]
    }
    }); 

var handling = new Vue({

    el : "#handling",
    methods: {
        pesan: function(){
            alert("Selamat belajar Vue.js yang mudah ini hehe")
        },
        simpan: function(){
            this.dataGuru.push(this.guru);
            this.guru="";
        }
    },
    data: {
        'dataGuru' : [
            {'nama' : 'Kodir', 'kelas' : 'XRPL1'},
            {'nama' : 'Pardi', 'kelas' : 'XRPL2'},
            {'nama' : 'Rois',  'kelas' : 'XRPL3'},
            {'nama' : 'Kemi',  'kelas' : 'XRPL4'},
            {'nama' : 'Yusuf', 'kelas' : 'XRPL5'},
            {'nama' : 'Desi',  'kelas' : 'XRPL6'},

        ],
        'guru'  : ''
    },
    });
    
    Vue.component('counter',
    {
        data: function () {
            return {
                count:0
            }
        },
        template: '<button v-on:click="count++">Kamu nge klik ini sudah {{count}} kali</button>'
    }
    )
    new Vue({ el: '#counter-demo'})
