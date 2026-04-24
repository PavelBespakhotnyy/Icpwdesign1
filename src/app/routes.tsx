import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programs } from "./pages/Programs";
import { ProgramDetail } from "./pages/ProgramDetail";
import { Teachers } from "./pages/Teachers";
import { TeacherDetail } from "./pages/TeacherDetail";
import { Reviews } from "./pages/Reviews";
import { Library } from "./pages/Library";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
import { Therapy } from "./pages/Therapy";
import { AboutProcessWork } from "./pages/AboutProcessWork";
import { Events } from "./pages/Events";
import { Graduates } from "./pages/Graduates";

function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center py-32 text-center px-6"
    >
      <div
        className="text-8xl font-bold mb-4 opacity-10"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--icpw-primary)' }}
      >
        404
      </div>
      <h2
        className="mb-3"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.5rem', color: 'var(--icpw-on-surface)' }}
      >
        Страница не найдена
      </h2>
      <p
        className="mb-6 text-sm max-w-sm"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.7 }}
      >
        Возможно, страница была перемещена или адрес введён неверно.
      </p>
      <a
        href="#/"
        className="px-6 py-3 rounded-lg text-sm text-white"
        style={{
          background: 'linear-gradient(135deg, #50662b 0%, #455a20 100%)',
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          textDecoration: 'none',
        }}
      >
        На главную
      </a>
    </div>
  );
}

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "programs", Component: Programs },
      { path: "programs/:slug", Component: ProgramDetail },
      { path: "teachers", Component: Teachers },
      { path: "teachers/:id", Component: TeacherDetail },
      { path: "reviews", Component: Reviews },
      { path: "library", Component: Library },
      { path: "faq", Component: FAQ },
      { path: "contact", Component: Contact },
      { path: "therapy", Component: Therapy },
      { path: "about-process-work", Component: AboutProcessWork },
      { path: "events", Component: Events },
      { path: "graduates", Component: Graduates },
      { path: "*", Component: NotFound },
    ],
  },
]);