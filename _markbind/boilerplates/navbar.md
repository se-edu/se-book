<navbar placement="top" type="inverse">
  <a slot="brand" href="/" title="Home" class="navbar-brand">Software Engineering for Self-Directed Learners</a>
  <li slot="right">
    <searchbar :data="searchData" placeholder="Search" :on-hit="searchCallback" menu-align-right></searchbar>
  </li>
</navbar>