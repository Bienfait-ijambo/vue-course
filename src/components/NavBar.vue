<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- logo here  -->
      <slot name="headerLogo"></slot>
      <RouterLink  class="navbar-brand" to="/">App</RouterLink>
     
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
          <li class="nav-item">
            <RouterLink  class="nav-link" to="/">HomePage</RouterLink>
     
          </li>
          <li class="nav-item">
            <RouterLink  class="nav-link" to="/about">About page</RouterLink>
          </li>
        </ul>
        <span class="navbar-text">
          <RouterLink style="color:blue"  class="nav-link" to="/auth">Register</RouterLink>
          <slot name="navbar"></slot>
        </span>
      </div>
    </div>
  </nav>
</template>
