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
- Parallel routes: Redner comopnent by simultaneously or conditionally using '@route-name'.
  ```tsx
  // folder
  @modal
    page.tsx
  // layout
  export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
  }) {
    return (
      <>
        {props.children}
        {props.modal}
      </>
    );
  }
  ```
- Intercepting routes: Display content as a modal. syntax (...): use case when want display other route to modal dont reload current route.
- 

3. Colocation
- A routes is not publicly accessible untils a page.js or routes.js is addes to.
- Keep project file outside the app directory.

4. There are 3 way to ogranize file foler:
- Store project files outside of app
- Store project files in top-level folders inside of app
- Split project files by feature or route

5. Component hierarchy (Phan cap):
- Layout > Template > Error > Loading > Page (I can contain child is a group of layout template ,...)

6. Linking and navigations:
App router uses a hyprid approach for routing and navigations. 
+ Server will Splitting code to smaller bundles to download as execute at brower.
+ Prefetching (Only in production) is a way to preload a route in the background before the user visit (using Link or router,.prefetch).
+ Caching nextjs has a inmemory client side cache called Routercache, 
+ Partial Rendering: Load only component at specific route no tload full
+ Soft navigation: 
+ Back and forward Navigation_
+ Routing between pages and apps: Need config
Type:
- Use `Link` component (Same)
- Use `useRouter()` hook (Same)
- Use `redirect`
- Use `window.history,` 
[TODO: DEMO HANDLE NAVIGATION]

7. Error handling
- Expected erro need use useActionState instead try catch
- Unexpected error using error.tsx or global-error.tsx
[TODO: DEMO HANDLE ERROR]

8. Middleware:
Middleware allows you to run code before a request is completed.
syntax: middleware.ts file only one file.
- Usecase:
    + Authenticaton check session or cookie
    + Serverside redirect
    + Path rewriting
    + Loging and Analytics
    + Feature flagging.
- Best practice:
    + 
9. Internationalization:

10. Handle redirecting login by token:
Use server size logi to hall api login 3th.

11. Hanlde guard in nextjs:
- Use middleware to redirect request when token not found
- Use interceptor to handle error from server. [toDO: demo]
- 


### Style/Component/Layout
- Interacted with tailwindcss

### Fetchign data:
- Fetching data from database and from other api.
- By default all components created is server component, if want use reacthook, need to use "use client" directive
- Lazyload component: 
```javascript
///
"use client"

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  ssr: false, // Disable SSR if the component relies on client-side only features
});

```
NOte: 
- Nextjs not allow import server component to client components butt you can use childrent instead

### Rendering:
- Server component: 
  + Render html at serve then return html to client, get data blabla
  + Rendering strategy: Static, Dynamic, Streaming (use Suspense): Next.js will automatically choose the best rendering strategy for each route based on the features and APIs used
- Client component: 
  + That file can handle react lifecircle hook, events, call api... vd: button, comonent handle user events. 
  + SWR is highly recommended if you are fetching data on the client-side. It handles caching, revalidation, focus tracking, refetching on intervals, and more.
- https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#when-to-use-server-and-client-components# nextjs-scaleable-app

### Hook: https://react.dev/reference/react/hooks
- It is a function iteract with react lifecicle and state.
- Use state, Reuse logic, advoid complex class component,...

### Call api:
swr.
https://swr.vercel.app/docs/getting-started
Need cofirm to use lib client


### Installed package:
- Modal: https://www.npmjs.com/package/react-modal#demos
- UIlib:
  - ant: https://ui.shadcn.com/docs/components/date-picker
  - shadcn: - https://ui.shadcn.com/docs/components/date-picker

# React concept:
## Hook:
1. reducer: Takes the current state and an action as input, Returns a new state based on the action type.
2. useContext: access global state without prop drilling.
3. useMemo: Cached caludated value
4. useCallback: Cached functions

# Handle form validations:
# Middleware to protect routes:
# Component to show and hide elements.

# Example flow:

# Best Practice:
1. Where get data from server or from browser (Dung o dau goi de get data):
  + server: Secure api, Best for SEO, Server compute 
  + client: NOnsecue api, best for perfomance, Brower compute

2. How handle error best practice:
  + 