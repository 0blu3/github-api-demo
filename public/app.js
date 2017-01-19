$.get('/github/user/repos?type=owner')
.then(
  data => {
    data.forEach(repo => $('#results').append(`<p>${repo.name}</p>`))
  },
  err => {
    console.error(err)
  })
