import { DevTools, Tolgee, FormatSimple } from '@tolgee/web';

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL;

export const ALL_LANGUAGES = ['en', 'th', 'zh'];

export const DEFAULT_LANGUAGE = 'th';

export async function getStaticData(
  languages: string[],
  namespaces: string[] = ['']
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: Record<string, any> = {};
  for (const lang of languages) {
    for (const namespace of namespaces) {
      if (namespace) {
        result[`${lang}:${namespace}`] = (
          await import(`../../messages/${namespace}/${lang}.json`)
        ).default;
      } else {
        result[lang] = (await import(`../../messages/${lang}.json`)).default;
      }
    }
  }
  return result;
}

export function TolgeeBase() {
  return Tolgee()
    .use(FormatSimple())
    // replace with .use(FormatIcu()) for rendering plurals, foramatted numbers, etc.
    .use(DevTools())
    .updateDefaults({
      apiKey,
      apiUrl,
    });
}