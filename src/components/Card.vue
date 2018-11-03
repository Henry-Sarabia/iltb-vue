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

$black: hsl(0,0,14%);
$yellow: #D0BB57;
$offwhite: #c2c3c1;
$header-color:#9CC9E3;
$body-color: #DCE3E7;

$title-size: 1em;
$description-size: 1.5em;
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
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  background-image: linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1));

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
  padding: 20px 45px 20px 20px;
  margin: 0 auto;
  background-image: linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1));
  // clip-path: polygon(10% 0, 100% 0%, 100% 100%, 10% 100%);
  // clip-path: polygon(0 0, 90% 0, 90% 100%, 0 100%);

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
  z-index: 20;
}

.stat-info{
  position: relative;
  padding: 0;
  font-size: $stat-size;
  color: $body-color;
  font-family: "Roboto", sans-serif;

  .left-corner {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 70px;
    width: 70px;
    background-image: linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1));
    clip-path: circle(100% at 0 100%);
    // clip-path: ellipse(80% 100% at 0% 100%);
    .stat-value {
      color: $black;
    }
  }

  .right-corner {
    position: absolute;
    height: 65px;
    width: 65px;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(rgba(255,255,255,1), rgba(255,255,255,1));
    // clip-path: polygon(20% 0, 100% 0, 100% 100%, 20% 100%, 0 50%);
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
    border-radius: 5px 0 0 0;
    // clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 25%);

    .stat-weight {
      // position: relative;
      color: $black;
      // top: 0.5rem;
      // left: 0.5rem;
    }
  }
  
  // .left-corner {
  //   position: absolute;
  //   bottom: 20px;
  //   left: 20px;
  // }

  // span{
  //     padding-left: 0.25rem;
  //     padding-right: 1rem;
  //   }

  // .coins{
  //   color: $yellow;
  // }

  // .weight{
  //   color: $offwhite;
  // }
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
