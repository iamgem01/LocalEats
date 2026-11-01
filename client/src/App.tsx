import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Farmers from "@/pages/Farmers";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";
import ProductDetail from "@/pages/ProductDetail.tsx";
import Login from "@/pages/Login";
import Signup from "@/pages/Singup";
import SignupSeller from "@/pages/SellerSignup";

import Dashboard from "@/pages/dashboard/page.tsx";
import Checkout from "@/pages/Checkout"
import { LanguageProvider } from "@/lib/useLanguage"

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/farmers" component={Farmers} />
      <Route path="/about" component={About} />
        <Route path= "/product/:id" component= {ProductDetail} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/signup-seller" component={SignupSeller} />

        <Route path="/home" component={Dashboard} />
        <Route path="/checkout" component={Checkout} />


        <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
          <TooltipProvider>
              <Toaster />
              <Router />
          </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
