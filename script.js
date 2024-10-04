const loadAllData = async (searchField) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts${
      searchField ? `?searchField=${searchField}` : ""
    }`
  );

  const data = await response.json();
  displayAllPost(data.posts);
};

const displayAllPost = (posts) => {
  const postContainer = document.getElementById("post-container");

  posts.forEach((e) => {
    const div = document.createElement("div");
    div.innerHTML = `

        <div class="p-6 lg:p-12 flex gap-6 lg:flex-row flex-col items-center lg:items-start bg-[#F3F3F5] rounded-3xl">
                <div class="indicator">
                    <span class="indicator-item badge ${
                      e.isActive ? "bg-green-600" : "bg-red-500"
                    } "></span>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src=${e.image} alt="">

                        </div>
                    </div>

                </div>
                <div class="space-y-4 w-full">
                    <div class="flex gap-4 *:opacity-60">
                        <p># category</p>
                        <p>Author: ${e.author.name}</p>

                    </div>
                    <h3 class="text-2xl font-bold opacity-70">${e.title}</h3>
                    <p class="opacity-40">${e.description}</p>
                    <hr class="border border-dashed border-gray-300">
                    <div class="flex justify-between *:font-bold[&>*not(:last-child)]:opacity-45">
                        <div class="flex gap-4">
                            <div class="space-x-2 flex items-center">
                                <i class="fa-regular fa-comment-dots"></i>
                                <p>${e.comment_count}</p>
                            </div>
                            <div class="space-x-2 flex items-center">
                                <i class="fa-regular fa-eye"></i>
                                <p>${e.view_count}</p>
                            </div>
                            <div class="space-x-2 flex items-center">
                                <i class="fa-regular fa-clock"></i>
                                <p>${e.posted_time} Min</p>
                            </div>
                        </div>
                        <div>
                            <div glass="opacity-100">
        <button id="addToList" onclick="markAsRead()" data-post='${JSON.stringify(
          e
        )}' class="addToList btn btn-circle bg-green-500 btn-sm">  <i class="fa-solid fa-envelope-open text-white"></i> </button>
</div>
                        </div>
                   
                    </div>
                </div>
                
            </div>
  
        `;
        postContainer.appendChild(div)
  });
};

loadAllData();

const handleSearchByCategory = () => {
  const searchField = document.getElementById("searchPosts").value;
  loadAllData(searchField);
};
