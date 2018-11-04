<template>
    <div class="blog-card card-background"
      v-bind:class="{ shadow: showShadow }">
        <div class="card-title">
          <h1>{{ item.name }}</h1>
        </div>
        <div class="title-content">
            <!-- <h3>{{ item.name }}</h3> -->
            <!-- <h2>{{ item.class }}</h2>
            <h3>{{ index }} </h3>
            <hr/> -->
        </div>
        <div class="card-content">
          <div class="content-description">
            <span>
              {{ item.description }}
            </span>
          </div>
        </div>
        <div class="card-stats">
            <div class="stat-info">
              <!-- <div class="left-corner">
                  <font-awesome-icon 
                      :icon="['fas', 'coins']"
                      size="sm"
                      class="icon is-small coins"
                  >
                  </font-awesome-icon>
                  <span>{{ item.value }} gp</span>
                  <font-awesome-icon 
                      :icon="['fas', 'weight-hanging']"
                      size="xs"
                      class="icon is-small weight"
                  >
                  </font-awesome-icon>
                  <span>{{ item.weight }} lb</span>
              </div> -->
              <div class="left-corner">
                <div class="stat-value">
                  <span>{{item.value}} gp</span>
                </div>
              </div>
              <div class="right-corner">
                <div class="stat-weight">
                  <span>{{ item.weight }} lb</span>
                </div>
              </div>
            </div>
        </div>
        <!-- <div class="gradient-overlay"></div> -->
        <div class="color-overlay"></div>
        <div class="outline-overlay"></div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        item: {
            name: String,
            description: String,
            class: String,
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
@import url(https://fonts.googleapis.com/css?family=Droid+Serif:400,700);

// variables
$card-width:  350px;
$card-height: 500px;
$card-radius: 10px;

$border-width: 2px;

$black: hsl(0,0,14%);
$yellow: #D0BB57;
$offwhite: #c2c3c1;
$header-color:#9CC9E3;
$body-color: #DCE3E7;

$title-size: 1em;
$description-size: 1.5em;
$stat-size: 1.1em;

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
  // overflow: hidden;
  border-radius: $card-radius;
  // box-shadow: 3px 3px 20px rgba(0, 0, 0, .4);
  text-align: center;
  z-index: 1; 
  
  &.card-background{
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/bg-blog-card.jpg) no-repeat;
    background: red;
  }
  
  .color-overlay{
    /* Rectangle 11: */
    width: $card-width;
    height: $card-height;
    background: rgba(84,104,110,0.35);
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    border-radius: $card-radius;
    // transition: background .3s cubic-bezier(.33,.66,.66,1);
  }
  .gradient-overlay{
    width: $card-width;
    height: $card-height;
    background-image: linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 21%);
    position: absolute;
    top: 350px;
    left: 0;
    z-index: 15;
  }

  .outline-overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: $card-width;
    height: $card-height;
    border: 6px solid $black;
    border-radius: $card-radius;
    z-index: 20;
  }
  
  &:hover{
    transition: box-shadow .2s cubic-bezier(.33,.66,.66,1);
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 1);
  }
}

.card-title {
  position: absolute;
  z-index: 20;
  top: 20px;
  padding: 5px 20px;
  // clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  border-radius: 2px;
  border: $border-width solid $black;
  // background-image: linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1));
  // background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
  background: $header-color;

  h1{
    font-size: $title-size;
    font-weight: 500;
    color: $black;
    letter-spacing: 2px;
    font-family: "Roboto", sans-serif;
  }
}
.card-content{
  position: absolute;
  z-index: 20;
  top: 30%;
  width: 100%;
  padding: 20px;
  // background-image: linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1));
  // background: linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15));
  background: $body-color;
  border: $border-width solid $black;
  border-radius: 2px;

  .content-description {
    width: 100%;
    height: 100%;
    text-align: center;
    color: $black;
    font-family: 'Droid Serif', serif;
    font-size: $description-size;
    font-weight: 400;
    line-height: 1.15em;
  }
}

.card-stats {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 25;
}

.stat-info{
  position: relative;
  padding: 0;
  font-size: $stat-size;
  color: $body-color;
  font-family: "Roboto", sans-serif;

  .left-corner {
    position: absolute;
    bottom: -10px;
    left: -10px;
    // height: 67px;
    // width: 67px;
    height: 80px;
    width: 80px;
    // background-image: linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1));
    background: $yellow;
    // background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
    border: $border-width solid $black;
    // border-radius: 50% 50% 50% 10px;
    border-radius: 50%;

    .stat-value {
      position: relative;
      margin-top: 30%;
      color: $black;
    }
  }

  .right-corner {
    position: absolute;
    height: 80px;
    width: 80px;
    bottom: -10px;
    right: -10px;
    // background-image: linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1));
    // background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)); 
    background: $offwhite;
    // clip-path: polygon(15% 10%, 85% 10%, 100% 90%, 0 90%);
    border: $border-width solid $black;
    // border-radius: 35px 35px 15px 15px; 
    border-radius: 20% 20% 10% 10% / 90% 90% 10% 10% ;

    .stat-weight {
      position: relative;
      margin-top: 30%;
      color: $black;

    }
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
  font-size: $title-size;
  font-weight: 500;
  letter-spacing: 2px;
  color: $header-color;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0;
}
h2{
  font-size: $stat-size;
  font-weight: 500;
  color: $yellow;
  font-family: 'Roboto', sans-serif;
}
hr{
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: $yellow;
}
</style>
