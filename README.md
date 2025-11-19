# Planor App Template

A production-ready React Native / Expo template built for speed and scalability.

## Features

- **Framework**: [Expo SDK 52](https://expo.dev/) (React Native 0.76)
- **Navigation**: [Expo Router](https://expo.dev/router)
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS) + [React Native Reusables](https://reactnativereusables.com)
- **Backend**: [Supabase](https://supabase.com/) (Auth, Database, Edge Functions)
- **Internationalization**: [i18n-js](https://github.com/fnando/i18n-js) + [expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/)
- **Analytics**: [PostHog](https://posthog.com/)
- **Paywalls**: [Superwall](https://superwall.com/)
- **Testing**: [Jest](https://jestjs.io/) + [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)

## Getting Started

### 1. Create a New App

The easiest way to start is using the CLI:

```bash
npx create-planor-app@latest my-app
```

### 2. Environment Setup

Rename `.env.example` to `.env` and fill in your API keys:

```env
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
EXPO_PUBLIC_POSTHOG_API_KEY=your-posthog-key
EXPO_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
EXPO_PUBLIC_SUPERWALL_API_KEY=your-superwall-key
```

### 3. Supabase Setup

1.  **Link Project**: `npm run supabase:link` (requires Supabase CLI)
2.  **Pull Schema**: `npm run supabase:pull`
3.  **Generate Types**: `npm run supabase:gen-types`

### 4. Run the App

```bash
npm run dev
# or
npm run ios
# or
npm run android
```

## Project Structure

- `app/`: Expo Router pages and layouts
- `components/`: Reusable UI components
- `lib/`: Service configurations (Supabase, i18n, PostHog, etc.)
- `i18n/`: Translation files
- `cli/`: The `create-planor-app` CLI tool source

## Testing

Run the test suite with:

```bash
npm test
```
