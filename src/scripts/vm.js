// Vue Model
const vm = new Vue({
  el: '#vm',
  data: () => ({
    greeting: 'Hello, Vue!',
    text: [],
  }),
  methods: {

  },
  created: function () {
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
  },
});
