<template>
  <div class="page">
    <h1>{{title}}</h1>
    <div class="container">
      <pre v-html = "text" class="mt-3 mb-0">{{ text }}</pre>
      <div class="paragraph" v-html="outputHTML">
      </div>
    </div>
    <div class="container">
        <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    </div>
  </div>
    
</template>

<script>
export default {
  name: 'page',
  data(){
    return{
      title: 'Typing Test',
      text: ''
    }
  },
    computed: {
    outputHTML() {
      let html = `<span class="correct">This is correct</span>`;
      html += `<span class="typo">This is wrong </span>`;

      return html;
    }
  }

}
</script>

<style scoped>
  .page{
    border: 1px solid black;
    margin: 0;
    height: 100vh;
  }
  .correct {
      color: rgb(63,81,181);
      font-size: 22px;
    }

  .typo {
      color: #f00;
      font-size: 22px;
    }
</style>
