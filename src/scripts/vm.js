// Vue Model
const vm = new Vue({
  el: '#vm',
  data: () => ({
    greeting: 'Hello, Vue!',
    text: [],
  }),
  methods: {
    edit: fields => {
      const text = prompt('Enter text', fields[0]);
      console.log(fields, text);

      // fetch('https://cmstest-b1db.restdb.io/<collection>/ID', {
      //   headers: {
      //     "content-type": "application/json",
      //     "x-apikey": "597f3006fc7b2b2169cafd8a",
      //     "cache-control": "no-cache"
      //   },
      //   method: "post",
      //   body: JSON.stringify({})
      // }).then(res => res.json()).then(doc => {
      //   console.log(doc[0]);
      //   this.text = doc[0].list
      // });
    }
  },
  created: function () {
    /* *
    // Fetch opendrive folder
    fetch('https://dev.opendrive.com/api/v1/folder/shared.json/NDdfNTEwNjEwXw?order_type=asc').then(res => res.json()).then(doc => {
      console.log(doc.Files.find(item => item.Name === 'text.txt'));

      // const fileUrl = '/content/text.txt';
      const fileId = doc.Files.find(item => item.Name === 'text.txt').FileId;
      const fileUrl = `https://dev.opendrive.com/api/v1/download/file.json/${fileId}`;

      fetch(fileUrl, { }).then(res => res.text()).then(doc => {
        console.log(doc);
        this.text = doc.trim().split('\n');
      });
    });
    /* */

    // Interact with restdb.io
    fetch('https://cmstest-b1db.restdb.io/rest/content', {
      "headers": {
        "content-type": "application/json",
        "x-apikey": "597f3006fc7b2b2169cafd8a",
        "cache-control": "no-cache"
      }
    }).then(res => res.json()).then(doc => {
      console.log(doc[0]);
      this.text = doc[0].list
    });

  },
});



/*
var jsondata = {
"title": "Simple Vue App",
"greeting": "Hello Vue",
"list": [
    "name",
    "image",
    "description",
    "topic"
    ]
};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://cmstest-b1db.restdb.io/rest/content",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "597f3022fc7b2b2169cafd8b",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}
$.ajax(settings).done(function (response) {
  console.log(response);
});
*/
