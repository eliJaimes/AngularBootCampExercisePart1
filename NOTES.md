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
