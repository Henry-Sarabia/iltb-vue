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
                      transform="up-1"
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
                      transform="up-1"
                    ></font-awesome-icon>
                    {{ item.weight }} lb
                  </span>
                </div>
              </div>
            </div>
        </div>
        <div class="gradient-overlay"></div>
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
    },
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:700,900);
@import url(https://fonts.googleapis.com/css?family=Droid+Serif:500,600,700);
@import url(https://fonts.googleapis.com/css?family=Roboto+Slab:500,600,700);
@import url(https://fonts.googleapis.com/css?family=Roboto+Mono:500,600,700);

// variables
$card-width:  350px;
$card-height: 520px;
$card-radius: 3px;

$border-width: 2px;
$border-offset: 4px;

$white: hsl(0, 0%, 96%);
$black: #0f1315;
$grey: #b9c1c6;
$yellow: #FFD700;
$blue:#9CC9E3;

$title-color: $blue;
$body-color: $white;
$category-color: $blue;
$coin-color: $yellow;
$weight-color: $grey;

$stroke: -1px -1px 0 $black,  1px -1px 0 $black, -1px 1px 0 $black, 1px 1px 0 $black;

$title-size: 1.25em;
$body-size: 1.75em;
$stat-size: 1.25em;

$title-weight: 600;
$body-weight: 700;
$stat-weight: 700;

$title-font: 'Roboto', sans-serif;
$body-font: 'Roboto Slab', serif;
$stat-font: 'Roboto', sans-serif;

$black-gradient: linear-gradient(rgba(15, 19, 21,0.6), rgba(15, 19, 21,0.6));
$black-fade: linear-gradient(180deg, rgba(15, 19, 21,0) 0%, rgba(15, 19, 21,0.55) 10%, rgba(15, 19, 21,0.55) 50%, rgba(15, 19, 21,0.55) 90%, rgba(15, 19, 21,0) 100%);

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
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  
  .color-overlay{
    width: $card-width;
    height: $card-height;
    background: rgba(84,104,110,0.25);
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
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
  border-radius: 2px;
  background-image: $black-gradient;


  h1 {
    font-size: $title-size;
    font-weight: $title-weight;
    color: $title-color;
    letter-spacing: 1px;
    font-family: $title-font;
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
    color: $body-color;
    font-family: $body-font;
    font-size: $body-size;
    font-weight: $body-weight;
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
  text-shadow: $stroke;
  font-family: $stat-font;

  .stat-left {
    position: absolute;
    bottom: $border-offset;
    left: $border-offset;
    padding: 10px;
    border-radius: 2px;

    .stat-value {
      font-size: $stat-size;
      font-weight: $stat-weight;
      color: $coin-color;
      font-variant: small-caps;

      .icon {
        color: $coin-color;
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
      color: $weight-color;
      font-variant: small-caps;

      .icon {
        color: $weight-color;
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
      font-weight: $stat-weight;
      color: $category-color;
      font-variant: small-caps;
      letter-spacing: 1px;
    }
  }

}
</style>
