<template>
  <header>
    <div>
      <router-link class="logo" to="/coaches"><h4>find a coach</h4></router-link>
    </div>
    <div>
      <ul>
        <li><router-link to="/coaches">all coaches</router-link></li>
        <li><router-link to="/requests">Requests</router-link></li>
      </ul>
    </div>
  </header>
</template>
<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  background-color: #361999;
  color: #78fff1;
  padding: 14px;

  font-size: large;
  text-transform: capitalize;
}
header div a {
  color: #78fff1;
  text-decoration: none;
  text-transform: capitalize;
  padding: 9px 15px;
  border: 1px solid #78fff1;
}
header div {
  display: flex;
  justify-items: center;
  align-items: center;
}
header ul li a:hover{
  color: #6bf8ea;
  background-color: #7c56f8ec;
  border-radius: 5px;
  transition:  all 0.3s ease-in;
}
header ul li {
  display: inline-block;
  margin-left: 11px;
}

.logo {
  border: none;
  font-style: oblique;
}
.logo :hover {
   border-bottom: 2px solid #78fff1;
   /* transition: all 0.5s  ; */
}
header ul li a.router-link-active {
  color: #6bf8ea;
  background-color: #7c56f8ec;
  border-radius: 5px;
  transition: all 0.4s;
}
</style>
