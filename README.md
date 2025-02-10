# NextJS Notebook
## Main concept and practice in nextjs
### Routing:
1. NextJS use file system routing: the routes in app are determined by how structure your file:
- File name is 'layout' will wrap file name is 'page' to render UI. (default)
- Public folder where save public resources that serve user. (default)
- File at `pages` folder will use page router, file at 'app' folder will use app router. (Best pratice for large scale application is use app router).

2. Type or routing:
- Naming conventions of routingfile: layout, page, loading, not-found, error, global-error, route (for api), template (rerender layout), default (fallback page)
- Nestest route: foldername/foldername ....
- Route group: use `(folder-name)` to group specific route similar type without effect with app routing:
  + Multiple layout
  + Add layout for specific feature. (checkout layout seperate with admin layout)
- Privdate folder: `_folder-name` declare folder name with _ first to make this folder is private.
- Use `[slug-or-some-other-key]` to use request param. `post/[glug]/page.tsx`

3. Colocation
- A routes is not publicly accessible untils a page.js or routes.js is addes to.
- Keep project file outside the app directory.

4. There are 3 way to ogranize file foler:
- Store project files outside of app
- Store project files in top-level folders inside of app
- Split project files by feature or route

5. Component hierarchy (Phan cap):
- Layout > Template > Error > Loading > Page (I can contain child is a group of layout template ,...)
### Style/Component/Layout
- Interacted with tailwindcss
### Fetchign data:
- Fetching data from database and from other api.
- By default all components created is server component, if want use reacthook, need to use "use client" directive
- Lazyload component:
NOte: 
- Nextjs not allow import server component to client components butt you can use childrent instead

### Rendering:
- Server component: 
  + Render html at serve then return html to client, get data blabla
  + Rendering strategy: Static, Dynamic, Streaming (use Suspense): Next.js will automatically choose the best rendering strategy for each route based on the features and APIs used
- Client component: That file can handle react lifecircle hook, events, call api... vd: button, comonent handle user events. 
- https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#when-to-use-server-and-client-components# nextjs-scaleable-app
