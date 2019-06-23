<template>
<div class="box">
    <div class="clock">
    {{time}}
    </div>
    <div>
        <button @click="timer" class="btn btn-primary">Start</button>
        <button @click="reset" class="btn btn-danger">Reset</button>
    </div>
</div>

</template>

<script>

export default {
    name: 'leftMenu',
     data: function() {
         return  {
           time: 0,
         }
    },
    methods: {
     timer: function(){
            setInterval(()=>{
                this.time++
            
         }, 1000)

     },
      reset(){
        this.time = 0;
       
        
    }
}
}


</script>

<style>
.box{
    border: 1px solid black;
    margin: 0;
    height: 100vh;
    
}
.clock{
    background-color: rgb(12, 163, 113);
    color: #ffffff;
    font-size: 6em;
    height: 33vh;
    display: flex;
    align-items: center;
    justify-content: center
}
</style>
