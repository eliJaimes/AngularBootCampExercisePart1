# First commit

## Create application

```shell
ng new ExercisePart1 --standalone false --dry-run
> Which stylesheet format would you like to use? SCSS
> Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? N
```

https://angular.io/cli

## Do clean up

- Sort imports
- Clean app.component.\* files
- Remove .spec files
- Remove unnecessary editor files

## Create 'components' module

```shell
ng generate module components --module app --routing false --dry-run
```

https://angular.io/cli/generate#module-command

## Create 'posts-table' component

```shell
ng generate component components/PostsTable --module components --skip-tests --dry-run
```

https://angular.io/cli/generate#component-command

- Clean posts-table.component.\* files
- Export 'posts-table' component from its 'components' module
- Render 'posts-table' component into 'app.component.html'

## Create 'posts' service

```shell
ng generate service services/Posts --skip-tests --dry-run
```

https://angular.io/cli/generate#service-command

- We will consume posts coming from this endpoint: https://jsonplaceholder.typicode.com/posts
- Inject HttpClient service via dependency injection
- Create 'getPosts' method that retrieves posts from the endpoint

## Create 'Post' type

- Create entities/post.type.ts file with the type definition and export it
- Use Post type on 'posts.service.ts'

## Consume 'posts' service in 'posts-table' component

- Import 'HttpClientModule' on 'app.module.ts' so the post can inject 'HttpClient' service
- Set necessary code to consume posts service
- Review retrieve posts on the console

## Handle 'posts' service observable un subscription

- Manage the 'posts' service subscription

## Render the posts on 'posts-table.component.html'

- Expose the posts to the view
- Include 'Roboto' font using https://fonts.google.com/share?selection.family=Roboto:wght@100;400;700
- Add '\_mixins.scss' and '\_variables.scss' files
- Configure 'styles.scss'

## Add pipes to improve readability

- Add 'uppercase' pipe
- Add 'titlecase' pipe
- Experiment with the 'json' pipe

## Create 'post-item' component

```shell
ng generate component components/PostItem --module components --skip-tests --dry-run
```

## Refactor to use 'post-item' component

- Include 'post-item' component on 'posts-table.component.html'

## Pass information to 'post-item'

- https://angular.io/guide/component-interaction#pass-data-from-parent-to-child-with-input-binding

## Fix styles due to view encapsulation

- https://angular.io/guide/view-encapsulation
- Move styles from parent to child

## Create 'filter' component

```shell
ng generate component components/Filter --module components --skip-tests --dry-run
```

- Include 'filter' component on 'posts-table.component.html'

## Add input and styles to 'filter' component

- Add an HTML input type search
- Style input to improve UI

## Add functionality to 'filter' component

- Add and event handler to the html input tag
- Expose an Output property to outside world from 'filter' component
- Wire filterChange from 'filter' component om 'posts-table.component.html'

## Add business logic to filter posts on 'posts-table' component

- Add a new 'filteredPosts' variable
- Refactor 'posts-table.component.html' to consume 'filteredPosts' variable instead
- Add a clear filter button
