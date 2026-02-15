
    import serve from "primate/serve";
    import views from "app:views";
    import routes from "app:routes";
    import pages from "app:pages";
    import assets from "app:assets";
    import s_config from "primate/symbol/config";
    
    const session_config = undefined;
    
    import facade from "$:app";

    
    const i18n_config = undefined;
    

    const app = await serve(import.meta.url, {
      assets,
      facade,
      routes,
      views,
      pages,
      mode: "production",
      session_config,
      i18n_config,
      target: "web",
    });

    export default app;
  
