import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { S as Sun, M as Moon, C as Clock3, a as CreditCard, b as ChartColumn, B as BrainCircuit, c as CircleCheck, d as CalendarDays, U as Users, e as MessageSquareText, f as ShieldCheck, L as Lock, A as ArrowRight, g as Sparkles } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const features = [{
  icon: CalendarDays,
  title: "Agenda clínica inteligente",
  description: "Organize sessões avulsas ou recorrentes, visualize sua semana e acompanhe horários com clareza."
}, {
  icon: Users,
  title: "Gestão de pacientes",
  description: "Cadastre pacientes, valores, frequência, modalidade de cobrança e status sem criar prontuário clínico."
}, {
  icon: CreditCard,
  title: "Controle financeiro",
  description: "Registre pagamentos via Pix, acompanhe pendências, atrasos, faturamento mensal e histórico por paciente."
}, {
  icon: BrainCircuit,
  title: "Assistente IA contextual",
  description: "Pergunte sobre sua agenda, pagamentos e pacientes. A IA responde com base no contexto real da sua clínica."
}, {
  icon: MessageSquareText,
  title: "Mensagens elegantes",
  description: "Gere mensagens de cobrança, confirmação, retorno e reagendamento com tom discreto e profissional."
}, {
  icon: ShieldCheck,
  title: "Segurança por clínica",
  description: "Cada profissional acessa apenas seus próprios dados, com isolamento por tenant e políticas de segurança."
}];
const painPoints = ["Agendamentos espalhados em conversas de WhatsApp", "Cobranças desconfortáveis e pagamentos esquecidos", "Pouca clareza sobre faturamento mensal", "Remarcações frequentes sem visão da agenda", "Trabalho repetitivo que consome tempo fora da clínica"];
const benefits = ["Mais clareza sobre sua semana clínica", "Menos desgaste com cobranças e lembretes", "Controle financeiro simples e objetivo", "Organização sem transformar a clínica em burocracia", "IA como assistente administrativa, não como substituta da escuta"];
const faq = [{
  question: "A Signa possui prontuário clínico?",
  answer: "Não. A proposta da Signa é organizar agenda, pacientes e financeiro sem armazenar conteúdo clínico, diagnósticos ou notas terapêuticas."
}, {
  question: "Preciso entender de tecnologia?",
  answer: "Não. A interface foi pensada para uso cotidiano, com navegação simples, visual limpo e suporte para começar."
}, {
  question: "A IA interfere na clínica?",
  answer: "Não. A IA atua apenas como assistente administrativa: ajuda com mensagens, agenda, pagamentos e organização operacional."
}, {
  question: "O pagamento da assinatura é automático?",
  answer: "Neste primeiro momento, a mensalidade é feita por Pix manual, mantendo o custo baixo e o atendimento próximo."
}];
function SectionLabel({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
    children
  ] });
}
function CTAButton({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/5575991512810?text=Olá,%20quero%20conhecer%20a%20Signa", className: "group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200", children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
  ] });
}
function SignaLandingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-[#f7f5f0] text-slate-950 dark:bg-[#0d1117] dark:text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none fixed inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-500/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-amber-100/50 blur-3xl dark:bg-slate-700/20" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg dark:bg-white dark:text-slate-950", children: "S" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold tracking-tight", children: "Signa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: "Gestão clínica inteligente" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-8 text-sm text-slate-600 dark:text-slate-300 md:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#significado", className: "hover:text-slate-950 dark:hover:text-white", children: "O nome" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#funcoes", className: "hover:text-slate-950 dark:hover:text-white", children: "Funções" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#preco", className: "hover:text-slate-950 dark:hover:text-white", children: "Preço" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/5575991512810?text=Olá,%20quero%20conhecer%20a%20Signa", className: "hidden rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 sm:inline-flex", children: "Falar no WhatsApp" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-blue-600" }),
          "Para psicanalistas de consultório individual"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-slate-950 dark:text-white md:text-7xl", children: "Organize seu consultório sem perder a essência da clínica." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300", children: "A Signa é uma plataforma elegante para psicanalistas gerenciarem agenda, pacientes, pagamentos e rotina administrativa com apoio de inteligência artificial." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col gap-4 sm:flex-row sm:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTAButton, { children: "Quero conhecer a Signa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: [
            "Mensalidade simples: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-900 dark:text-white", children: "R$ 39,00" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.96
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 0.7,
        delay: 0.1
      }, className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-black/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[1.5rem] bg-slate-950 p-5 text-white dark:bg-[#111827]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "Dashboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: "Boa tarde, Analista" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-5 w-5 text-slate-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-5 w-5 text-blue-300" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/10 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "mb-3 h-5 w-5 text-blue-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "Sessões hoje" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-3xl font-semibold", children: "6" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/10 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "mb-3 h-5 w-5 text-emerald-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "Receita mensal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-3xl font-semibold", children: "R$ 8.420" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/10 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "mb-3 h-5 w-5 text-amber-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "Pendências" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-3xl font-semibold", children: "4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/10 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { className: "mb-3 h-5 w-5 text-violet-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "Insight IA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-6 text-slate-200", children: "2 pacientes estão há mais de 15 dias sem sessão." })
          ] })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "significado", className: "relative z-10 mx-auto max-w-5xl px-6 py-20 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "O sentido do nome" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-semibold tracking-tight md:text-5xl", children: "Por que Signa?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-8 text-lg leading-8 text-slate-600 dark:text-slate-300 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "O nome Signa remete ao signo, ao significante, ao que marca, organiza e dá forma à experiência. Na clínica, sabemos que não é o excesso que orienta, mas a estrutura." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A Signa nasce desse princípio: organizar sem invadir, estruturar sem reduzir, auxiliar sem interferir. Um suporte silencioso para que sua clínica funcione melhor." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[0.9fr_1.1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "O problema" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-semibold tracking-tight md:text-5xl", children: "A clínica exige presença. A rotina exige organização." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300", children: "O trabalho administrativo acontece fora da sessão, mas afeta diretamente a vida do consultório. Quando tudo fica no improviso, o psicanalista perde tempo, energia e clareza." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: painPoints.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-3xl border border-slate-200 bg-white/75 p-5 shadow-sm dark:border-white/10 dark:bg-white/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-slate-950 dark:bg-white" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-700 dark:text-slate-300", children: item })
      ] }, item)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 dark:bg-white dark:text-slate-950 md:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[0.9fr_1.1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-300 dark:text-blue-700", children: "A solução" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-semibold tracking-tight md:text-5xl", children: "A Signa não organiza apenas. Ela pensa a operação com você." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-lg leading-8 text-slate-300 dark:text-slate-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Diferente de sistemas comuns, a Signa automatiza partes essenciais da rotina: sessões recorrentes, pendências financeiras, vencimentos, status de pagamento e consultas administrativas via IA." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Você não apenas registra. Você passa a ter controle real do funcionamento do consultório." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Benefícios" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[0.95fr_1.05fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-semibold tracking-tight md:text-5xl", children: "Mais tempo clínico. Menos desgaste operacional." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300", children: "A Signa cuida da estrutura administrativa para que você possa preservar aquilo que realmente sustenta sua prática: a escuta." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: benefits.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-slate-200 dark:bg-white/5 dark:ring-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-blue-700 dark:text-blue-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-700 dark:text-slate-300", children: item })
        ] }, item)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "funcoes", className: "relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Funcionalidades" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-semibold tracking-tight md:text-5xl", children: "O que você encontra na Signa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300", children: "Uma plataforma completa para a operação do consultório, sem prontuário clínico e sem interferência no conteúdo da análise." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: features.map((feature) => {
        const Icon = feature.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: feature.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 leading-7 text-slate-600 dark:text-slate-300", children: feature.description })
        ] }, feature.title);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-white/5 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { className: "mb-6 h-10 w-10 text-blue-700 dark:text-blue-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-semibold tracking-tight", children: "IA real, não superficial." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300", children: "O assistente da Signa compreende o contexto da sua clínica: pacientes, sessões, pagamentos recentes e sua própria base de conhecimento personalizada." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: ["Quem está inadimplente?", "Quem está há mais de 15 dias sem vir?", "Quanto faturei este mês?", "Gere uma cobrança cordial para um pagamento pendente."].map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-slate-950 p-5 text-white shadow-lg dark:bg-white dark:text-slate-950", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400 dark:text-slate-500", children: "Você pode perguntar:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-lg font-medium", children: [
          "“",
          q,
          "”"
        ] })
      ] }, q)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 mx-auto max-w-5xl px-6 py-20 text-center lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Diferencial" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-semibold tracking-tight md:text-5xl", children: "Um sistema que compreende a lógica do consultório." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300", children: "A maioria das plataformas exige que você adapte sua prática ao sistema. A Signa faz o contrário: considera sessões recorrentes, variações de frequência, pagamentos nem sempre imediatos e organização sem interferência na clínica." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "preco", className: "relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white/90 p-8 text-center shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-white/5 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Investimento" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-semibold tracking-tight", children: "Simples, direto e acessível." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-end justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl font-semibold tracking-tight", children: "R$ 39" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pb-2 text-slate-500 dark:text-slate-400", children: "/ mês" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300", children: "Acesso à plataforma, agenda, pacientes, financeiro e assistente IA com uso limitado." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTAButton, { children: "Quero aderir à Signa" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-slate-500 dark:text-slate-400", children: "Pagamento mensal por Pix. Sem taxas escondidas." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 mx-auto max-w-5xl px-6 py-20 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Perguntas frequentes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-semibold tracking-tight md:text-5xl", children: "Antes de começar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4", children: faq.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: item.question }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 leading-7 text-slate-600 dark:text-slate-300", children: item.answer })
      ] }, item.question)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 mx-auto max-w-6xl px-6 py-24 text-center lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2.5rem] bg-slate-950 px-8 py-16 text-white shadow-2xl shadow-slate-900/20 dark:bg-white dark:text-slate-950", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "mx-auto mb-6 h-10 w-10 text-blue-300 dark:text-blue-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl", children: "Sua clínica não precisa funcionar no improviso." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 dark:text-slate-700", children: "Ela pode ter estrutura, clareza e inteligência sem perder aquilo que a sustenta." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/5575991512810?text=Olá,%20quero%20aderir%20à%20Signa", className: "inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-200 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800", children: [
        "Começar com a Signa",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 text-xl font-medium", children: "Signa organiza o que não é da clínica — para proteger o que é." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative z-10 border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2026 Signa. Gestão clínica inteligente para psicanalistas." }) })
  ] });
}
export {
  SignaLandingPage as component
};
