<template>
  <h1>Movies</h1>
  <div v-if="isLoading">
    <p>Loading ...</p>
  </div>
  <div v-else-if="error">
    <P>{{ error }}</P>
  </div>
  <div v-else>
    <div>
      <label for="search"
        >Search: <input type="text" id="search" v-model="searchTerm" />
      </label>
    </div>
    <ul>
      <li v-for="movie in filteredItems" :key="movie.id">
        <article>
          <h3>{{ movie.title }}</h3>
          <h4>Released on: {{ movie.release_date }}</h4>
          <h5>Directed by: {{ movie.director }}</h5>
          <p>{{ movie.opening_crawl }}</p>
        </article>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useMovies } from "../composables/useMovies";
import { useSearch } from "../composables/useSearch";
const { movies, isLoading, error } = useMovies();
const { searchTerm, filteredItems: filteredItems } = useSearch(movies);
</script>
