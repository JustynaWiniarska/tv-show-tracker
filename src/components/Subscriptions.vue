<template>
  <div>
    <form id="search">
      <div class="field has-addons">
        <p class="control is-expanded has-icon has-icon-left">
          <input type="text" class="input" placeholder="Search for shows ..." />

        </p>
        <p class="control"><button type="submit" class="button is-success"><i class="fa-solid fa-magnifying-glass"></i></button></p>
      </div>
    </form>

    <a class="pull-left">Clear search <fa-icon icon="times" /></a>

    <!-- <p>No results found.</p> -->

    <div class="columns is-multiline">

			<!-- loop through results: -->
      <div class="column is-2">
        <div class="card">
          <div class="card-image">
						<!-- router-link -->
          </div>
          <div class="card-content">
            <p class="title is-4">
							<!-- router-link -->
						</p>
            <p class="subtitle is-6">Running on <span> ... </span></p>
          </div>
          <div class="card-footer">
            <div class="card-footer-item">
              <a><fa-icon icon="rss" /> Subscribe</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>