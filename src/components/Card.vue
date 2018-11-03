<template>
    <div class="blog-card card-background"
      v-bind:class="{ shadow: showShadow }">
        <div class="title-content">
            <h3>{{ item.name }}</h3>
            <h3>{{ index }} </h3>
            <hr/>
            <div class="intro">{{ item.description }}</div>
        </div>
        <div class="card-info">
            {{ item.description }}
        </div>
        <div class="card-stats">
            <div class="stat-info">
              <div class="left-corner">
                  <font-awesome-icon 
                      :icon="['fas', 'coins']"
                      size="md"
                      class="icon is-small coins"
                  >
                  </font-awesome-icon>
                  <span>{{ item.value }} gp</span>
              </div>
              <div class="right-corner">
                  <font-awesome-icon 
                      :icon="['fas', 'weight-hanging']"
                      size="md"
                      class="icon is-small weight"
                  >
                  </font-awesome-icon>
                  <span>{{ item.weight }} lb</span>
              </div>
            </div>
        </div>
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        item: {
            name: String,
            description: String,
            quality: String,
            material: String,
            value: Number,
            weight: Number,
        },
        id: String,
        index: Number,
        showShadow: Boolean,
    }
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700);
@import url(https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic);

// variables
$card-width:  350px;
$card-height: 500px;
$h-color:     #9CC9E3;
$yellow:      #D0BB57;
$txt-color:   #DCE3E7;
$title-size: 1.75em;
$description-size: 1em;
$stat-size: 1.25em;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  background: #323c41;
}

.shadow {
  box-shadow: 3px 3px 20px rgba(0, 0, 0, .4);
}

.blog-card{
  width: $card-width;
  height: $card-height;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -250px 0 0 -175px;
  overflow: hidden;
  border-radius: 10px;
  // box-shadow: 3px 3px 20px rgba(0, 0, 0, .4);
  text-align: center;
  z-index: 1; 
  
  &.card-background{
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/bg-blog-card.jpg) no-repeat;
  }
  
  .color-overlay{
    /* Rectangle 11: */
    background: rgba(84,104,110,0.3);
    width: $card-width;
    height: $card-height;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    transition: background .3s cubic-bezier(.33,.66,.66,1);
  }
  .gradient-overlay{
    /* bg-gradient: */
    background-image: linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 21%);
    width: $card-width;
    height: $card-height;
    position: absolute;
    top: 350px;
    left: 0;
    z-index: 15;
  }
  
  &:hover{
    transition: box-shadow .2s cubic-bezier(.33,.66,.66,1);
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 1);
    
    // .card-info{
    //   opacity: 1;
    //   bottom: 120px;
    // }
    // .color-overlay{
    //   background: rgba(84,104,110,0.8);
    // }
  }
}

.title-content{
  text-align: center;
  margin: 70px 0 0 0;
  position: absolute;
  z-index: 20;
  width: 100%;
  top: 0;
  left: 0;
}
h3{
  // font-size: 20px;
  font-size: $title-size;
  font-weight: 500;
  letter-spacing: 2px;
  color: $h-color;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0;
}
hr{
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: $yellow;
}
.intro{
  width: 170px;
  margin: 0 auto;
  color: $txt-color;
  font-family: 'Droid Serif', serif;
  // font-size: 13px;
  font-size: $description-size;
  font-style: italic;
  line-height: 18px;
}
.card-info{
  width: 100%;
  position: absolute;
  bottom: 100px;
  left: 0;
  margin: 0 auto;
  padding: 0 50px;
  color: $txt-color;
  font-family: 'Droid Serif', serif;
  font-style: 16px;
  line-height: 24px;
  z-index: 20;
  opacity: 0;
  transition: bottom .3s, opacity .3s cubic-bezier(.33,.66,.66,1);
}

.card-stats {
  position: absolute;
  bottom: 20px;
  width: 100%;
  z-index: 20;
}

.stat-info{
  position: relative;
  padding: 0;
  font-size: $stat-size;
  color: $txt-color;
  font-family: "Roboto", sans-serif;
  // width: 100%;

  .left-corner {
    position: absolute;
    bottom: 0;
    left: 20px;
  }

  .right-corner {
    position: absolute;
    bottom: 0;
    right: 20px;
  }

  span{
      padding-left: 0.25rem;
    }

  .coins{
    color: $yellow;
  }

  .weight{
    color: #c2c3c1;
  }
}
</style>
