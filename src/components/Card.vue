<template>
    <div class="blog-card card-background"
      
      :style="{backgroundImage: `url(${require(`../assets/${item.class}.jpg`)})`}"
    >
        <div class="card-title">
          <h1>{{ item.name }}</h1>
        </div>
        <div class="card-content">
          <div class="content-description">
            <span>
              {{ item.description }}.
            </span>
          </div>
        </div>
        <div class="card-stats">
            <div class="stat-info">
              <div class="stat-left">
                <div class="stat-value">
                  <span>
                    <font-awesome-icon 
                      v-bind:icon="['fas', 'coins']"
                      size="xs"
                      class="icon is-small"
                    ></font-awesome-icon>
                    {{item.value}} gp
                  </span>
                </div>
              </div>
              <div class="stat-center">
                <h2> {{ item.class }} </h2>
              </div>
              <div class="stat-right">
                <div class="stat-weight">
                  <span>
                    <font-awesome-icon 
                      v-bind:icon="['fas', 'weight-hanging']"
                      size="xs"
                      class="icon is-small"
                    ></font-awesome-icon>
                    {{ item.weight }} lb
                  </span>
                </div>
              </div>
            </div>
        </div>
        <div class="gradient-overlay"></div>
        <!-- <div class="color-overlay"></div> -->
        <!-- <div class="color-overlay2"></div> -->
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
    },
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700);
@import url(https://fonts.googleapis.com/css?family=Droid+Serif:400,700);

// variables
$card-width:  350px;
$card-height: 520px;
$card-radius: 3px;

$border-width: 2px;
$border-offset: 4px;

$white: hsl(0, 0%, 96%);
// $black: hsl(0,0,14%);
$black: #0f1315;
// $yellow: #D0BB57;
$yellow: #FFD700;
$offwhite: #c2c3c1;
$green: #b5d6b2;
$blue:#9CC9E3;
$red: #ff9585;

$body-color: #DCE3E7;

$background-yellow: rgba(235, 186, 92, 0.99);
$background-offwhite: rgba(202, 209, 209, 0.99);

$stroke: -1px -1px 0 $black,  1px -1px 0 $black, -1px 1px 0 $black, 1px 1px 0 $black;

$title-size: 1.2em;
$description-size: 1.75em;
$stat-size: 1.25em;
$caps-size: 1.1em;

$stat-weight: 500;

$black-gradient: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55));
$black-fade: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 10%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.55) 90%, rgba(0,0,0,0) 100%);
$white-gradient: linear-gradient(rgba(245,245,245,0.7), rgba(245,245,245,0.7));

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
  box-shadow: 3px 3px 20px rgba(0, 0, 0, .4);
  text-align: center;
  z-index: 1;
  
  
  &.card-background{
    // background: white;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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

  .color-overlay2{
    width: $card-width;
    height: $card-height;
    background: hsla(0,0,20,0.2);
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    border-radius: $card-radius;
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: $card-width;
    height: $card-height;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.65) 90%);
    border-radius: $card-radius;
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
  padding: 5px 30px 5px 20px;
  clip-path: polygon(0 0, 100% 0, 82% 100%, 0 100%);
  border-radius: 2px;
  background-image: $black-gradient;


  h1 {
    font-size: $title-size;
    font-weight: 500;
    color: $blue;
    letter-spacing: 1px;
    font-family: "Roboto", sans-serif;
    text-transform: capitalize;
    text-shadow: $stroke;
  }
}

.card-content{
  position: absolute;
  z-index: 20;
  top: 33%;
  padding: 20px;
  background-image: $black-gradient;

  .content-description {
    text-align: center;
    color: $blue;
    font-family: 'Droid Serif', serif;
    font-size: $description-size;
    font-weight: 600;
    line-height: 1.15em;
    text-shadow: $stroke;
    
    &::first-letter {
      text-transform: capitalize;
    }
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
  color: $body-color;
  font-family: "Roboto", sans-serif;
  text-shadow: $stroke;

  .stat-left {
    position: absolute;
    bottom: $border-offset;
    left: $border-offset;
    padding: 10px;
    border-radius: 2px;

    .stat-value {
      font-size: $stat-size;
      font-weight: $stat-weight;
      color: $blue;
      font-family: "Roboto", sans-serif;
      // font-variant: small-caps;

      .icon {
        color: $yellow;
      }
    }
  }

  .stat-right {
    position: absolute;
    bottom: $border-offset;
    right: $border-offset;
    padding: 10px;
    border-radius: 2px;

    .stat-weight {
      font-size: $stat-size;
      font-weight: $stat-weight;
      color: $blue;
      font-family: "Roboto", sans-serif;
      // font-variant: small-caps;

      .icon {
        color: $offwhite;
      }
    }
  }

  .stat-center {
    position: absolute;
    bottom: $border-offset;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 10px;
    border-radius: 2px;

    h2 {
      font-size: $stat-size;
      font-weight: 500;
      color: $blue;
      letter-spacing: 1px;
      font-family: "Roboto", sans-serif;
      font-variant: small-caps;
    }
  }

}
hr{
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: $yellow;
}
</style>
