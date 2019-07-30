# Playground GraphQL with Node, MySQL and Sequelize

```
docker-compose up -d
yarn install
yarn sequelize db:migrate
yarn start
```

Open `localhost:4004` and play...

```
mutation {
  createUser(name: "User1", email: "user1@user.com") {
    id,
    name
  }
}
```

```
mutation {
  createPost(title: "Post 1", content: "Content 1", user_id: 1) {
    id,
    content
  }
}
```

```
query {
  posts {
    id
    title
    content
    user {
      id,
      name
    }
  }
}
```

```
query {
  users {
    id,
    name,
    email
  }
}
```
