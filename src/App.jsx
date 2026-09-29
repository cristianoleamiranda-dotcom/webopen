import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 font-sans">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 text-center">
        ¡Hola! Soy tu Programador IA
      </h1>
      <p className="text-xl text-slate-300 max-w-2xl text-center mb-10 leading-relaxed">
        El entorno de trabajo está listo. Ya que Open-Design no funciona aquí, 
        yo me encargaré de diseñar, maquetar y escribir todo el código de la interfaz 
        y la lógica directamente en este servidor.
      </p>
      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 w-full max-w-md transform transition duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold mb-4 text-cyan-400 border-b border-slate-700 pb-2">
          ¿Qué construimos hoy?
        </h2>
        <ul className="space-y-3 text-slate-300 mt-4">
          <li className="flex items-center">
            <span className="text-emerald-400 mr-2">🚀</span> Landing pages corporativas
          </li>
          <li className="flex items-center">
            <span className="text-emerald-400 mr-2">📊</span> Dashboards y paneles
          </li>
          <li className="flex items-center">
            <span className="text-emerald-400 mr-2">🎨</span> Componentes UI (Formularios, Tarjetas)
          </li>
          <li className="flex items-center">
            <span className="text-emerald-400 mr-2">⚙️</span> Lógica de negocio y APIs
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
