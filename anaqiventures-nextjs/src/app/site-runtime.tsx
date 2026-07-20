"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    loadComponents?: (root?: string) => void;
    toggleMob?: () => void;
    toggleSub?: (id: string) => void;
    faq?: (el: HTMLElement) => void;
  }
}

function routeRoot(pathname: string) {
  const depth = pathname.split("/").filter(Boolean).length - 1;
  if (depth <= 0) return "";
  return "../".repeat(depth);
}

function setupInteractions() {
  window.toggleMob = () => {
    document.getElementById("mmenu")?.classList.toggle("open");
  };

  window.toggleSub = (id: string) => {
    document.getElementById(id)?.classList.toggle("open");
  };

  window.faq = (el: HTMLElement) => {
    const item = el.parentElement;
    const parent = item?.parentElement;
    if (!item || !parent) return;

    const isOpen = item.classList.contains("open");
    parent.querySelectorAll(".fi").forEach((faqItem) => faqItem.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -48px 0px",
    },
  );

  const observeRevealElements = () => {
    document.querySelectorAll(".reveal:not(.in), .reveal-group:not(.in)").forEach((el) => {
      observer.observe(el);
    });
  };

  observeRevealElements();

  const mutationObserver = new MutationObserver(observeRevealElements);
  mutationObserver.observe(document.body, { childList: true, subtree: true });

  const anchors = document.querySelectorAll(".sec-anchor");
  const navLinks = document.querySelectorAll('.subnav-row a[href^="#"]');
  if (anchors.length && navLinks.length) {
    navLinks[0]?.classList.add("active");

    const markCurrentAnchor = () => {
      let current = "";
      anchors.forEach((anchor) => {
        if (anchor.getBoundingClientRect().top <= 130) current = anchor.id;
      });
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
      });
    };

    window.addEventListener("scroll", markCurrentAnchor, { passive: true });
  }

  return () => {
    observer.disconnect();
    mutationObserver.disconnect();
  };
}

export function SiteRuntime({ route }: { route: string }) {
  const [componentsLoaded, setComponentsLoaded] = useState(false);

  useEffect(() => {
    if (!componentsLoaded || !window.loadComponents) return;

    window.loadComponents(routeRoot(route));
    const cleanup = setupInteractions();

    return cleanup;
  }, [componentsLoaded, route]);

  return <Script src="/components.js" strategy="afterInteractive" onLoad={() => setComponentsLoaded(true)} />;
}

