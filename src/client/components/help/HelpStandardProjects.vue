<template>
    <div class="help-standard-projects-container">

      <h2 v-i18n>Standard Projects</h2>
      <div class="cardbox" v-for="card in getBasicStandardProjects()" v-bind:key="card">
        <Card :card="{'name': card}" />
      </div>

      <h2 v-i18n>Standard Projects from Expansions and Solo Mode</h2>
      <div class="cardbox" v-for="card in getExpansionStandardProjects()" v-bind:key="card">
        <Card :card="{'name': card}" />
      </div>

      <h2 v-i18n>Standard Project from Fan-made Expansions</h2>
      <div class="cardbox" v-for="card in getFanMadeStandardProjects()" v-bind:key="card">
        <Card :card="{'name': card}" />
      </div>

      <h2 v-i18n>Harry Potter Expansion</h2>
      <div class="cardbox">
        <Card :card="{'name': getBrewPotion()}" />
      </div>
      <div class="help-potion-legend">
        <h3 v-i18n>Brew Potion — Ingredient Points</h3>
        <table>
          <tr><td>Hand card</td><td>1 pt</td></tr>
          <tr><td>Green card (played)</td><td>1 pt per tag</td></tr>
          <tr><td>Blue card (played)</td><td>2 + 1 pt per tag</td></tr>
        </table>
        <h3 v-i18n>Brew Potion — Potions (drawn cards are free)</h3>
        <table>
          <tr><td>2 pts</td><td>Draw 1</td></tr>
          <tr><td>3-4 pts</td><td>Draw 2</td></tr>
          <tr><td>5-6 pts</td><td>Draw 2 + 3 M€</td></tr>
          <tr><td>7+ pts</td><td>Draw 3 + 1 TR</td></tr>
        </table>
        <p v-i18n>No events, corporations, preludes, or CEOs. Once per generation.</p>
      </div>

    </div>
</template>
<script lang="ts">

import Vue from 'vue';
import Card from '@/client/components/card/Card.vue';
import {CardName} from '@/common/cards/CardName';

export default Vue.extend({
  name: 'HelpStandardProjects',
  components: {
    Card,
  },
  methods: {
    getBasicStandardProjects: () => [
      CardName.SELL_PATENTS_STANDARD_PROJECT,
      CardName.POWER_PLANT_STANDARD_PROJECT,
      CardName.ASTEROID_STANDARD_PROJECT,
      CardName.AQUIFER_STANDARD_PROJECT,
      CardName.GREENERY_STANDARD_PROJECT,
      CardName.CITY_STANDARD_PROJECT,
    ],
    getExpansionStandardProjects: () => [
      CardName.AIR_SCRAPPING_STANDARD_PROJECT,
      CardName.BUILD_COLONY_STANDARD_PROJECT,
      CardName.BUFFER_GAS_STANDARD_PROJECT,
    ],
    getFanMadeStandardProjects: () => [
      CardName.AIR_SCRAPPING_STANDARD_PROJECT_VARIANT,
      CardName.MOON_HABITAT_STANDARD_PROJECT,
      CardName.MOON_MINE_STANDARD_PROJECT,
      CardName.MOON_ROAD_STANDARD_PROJECT,
      CardName.MOON_HABITAT_STANDARD_PROJECT_VARIANT_1,
      CardName.MOON_MINE_STANDARD_PROJECT_VARIANT_1,
      CardName.MOON_ROAD_STANDARD_PROJECT_VARIANT_1,
      CardName.MOON_HABITAT_STANDARD_PROJECT_VARIANT_2,
      CardName.MOON_MINE_STANDARD_PROJECT_VARIANT_2,
      CardName.MOON_ROAD_STANDARD_PROJECT_VARIANT_2,
      CardName.EXCAVATE_STANDARD_PROJECT,
      CardName.COLLUSION_STANDARD_PROJECT,
    ],
    getBrewPotion: () => CardName.BREW_POTION_STANDARD_PROJECT,
  },
});
</script>
