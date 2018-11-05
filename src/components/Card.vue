<template>
    <div class="blog-card card-background"
      v-bind:class="{ shadow: showShadow }">
        <div class="card-title">
          <h1>{{ item.name }}</h1>
        </div>
        <div class="card-category">
          <h2>{{ item.class }}</h2>
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
          <!-- <div class="content-category">
            {{ item.class }}
          </div> -->
        </div>
        <div class="card-stats">
            <div class="stat-info">
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
$green: #b5d6b2;
$header-color:#9CC9E3;
$body-color: #DCE3E7;

$title-size: 1em;
$description-size: 1.5em;
$stat-size: 1.1em;

$black-gradient: linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15));

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
  border-radius: $card-radius;
  // box-shadow: 3px 3px 20px rgba(0, 0, 0, .4);
  text-align: center;
  z-index: 1; 
  
  &.card-background{
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/bg-blog-card.jpg) no-repeat;
    // background: red;
  }
  
  .color-overlay{
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
  top: 37px;
  padding: 5px 20px;
  // clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  border-radius: 2px;
  border: $border-width solid $black;
  background: $header-color;

  h1 {
    font-size: $title-size;
    font-weight: 500;
    color: $black;
    letter-spacing: 1.5px;
    font-family: "Roboto", sans-serif;
  }
}

.card-category {
  position: absolute;
  z-index: 20;
  top: 4px;
  right: 4px;
  padding: 3px 7px;
  // border-radius: 2px;
  border-radius: 3px 2px 5px 14px;
  border: $border-width solid $black;
  background: $green;

  h2 {
    font-size: $title-size;
    font-weight: 500;
    color: $black;
    letter-spacing: 1.5px;
    font-family: "Roboto", sans-serif;
  }
}

.card-content{
  position: absolute;
  z-index: 20;
  // top: 30%;
  // top: 191px;
  top: 33%;
  padding: 20px;
  background: $body-color;
  border: $border-width solid $black;
  border-radius: 2px;

  .content-description {
    text-align: center;
    color: $black;
    font-family: 'Droid Serif', serif;
    font-size: $description-size;
    font-weight: 400;
    line-height: 1.15em;
  }

  .content-category {
    position: absolute;
    // bottom: -34px;
    top: -34px;
    right: 2px;
    padding: 3px 5px;
    border: $border-width solid $black;
    border-radius: 2px;
    background: $green;
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
    height: 80px;
    width: 80px;
    background: $yellow;
    border: $border-width solid $black;
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
    background: $offwhite;
    border: $border-width solid $black;
    border-radius: 20% 20% 10% 10% / 90% 90% 10% 10% ;
    // clip-path: polygon(15% 10%, 85% 10%, 100% 90%, 0 90%);
    // border-radius: 35px 35px 15px 15px; 

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
