# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Cuentas de clientes y reservas

La aplicación permite que cada cliente se registre e inicie sesión. Sus reservas se guardan en el navegador asociadas a su ID de cliente; el panel del administrador conserva la vista y gestión de todas las reservas. Las reservas existentes sin `clienteId` permanecen sin asignar y no aparecen en los historiales de clientes.

Para probar el flujo:

1. Ejecuta `npm run dev` y abre la dirección local indicada por Vite.
2. En **Iniciar sesión**, selecciona **Regístrate** y crea una cuenta con un correo nuevo y una contraseña de al menos seis caracteres.
3. La sesión comenzará en el panel del cliente. En **Mis reservas**, pulsa **Nueva Reserva**, completa habitación y fechas y guarda. La reserva aparecerá en el historial con estado **Pendiente**.
4. Cierra sesión y repite el registro con otro correo. El segundo cliente no verá la reserva del primero.
5. Inicia sesión como administrador con `admin@hotel.com` y contraseña `12345`; en **Reservas** verás también las reservas de clientes y su ID. La cuenta de demostración de cliente es `cliente@hotel.com` con contraseña `12345`.

Los datos se guardan solo en `localStorage` del navegador actual. No hay backend; por ello, el almacenamiento local de credenciales no ofrece seguridad adecuada para producción ni sincroniza datos entre navegadores o dispositivos.
