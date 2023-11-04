import React from "react"; 
 
function Header() {
  return (
    <div>
             <ul class="nav justify-content-end">
    <li class="nav-item">
        <a class="nav-link active" href="#">Gmail</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">image</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#"> 
                list
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" href="#">profile</a>
    </li>
</ul>   
        
    </div>
  );
}

export default Header;
