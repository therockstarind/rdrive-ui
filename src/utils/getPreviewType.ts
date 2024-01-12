import { getExtension } from "./getFileIcon"

type Types = 'image' | 'markdown' | 'video'; // 'pdf' | 'audio'

type PreviewTypes = {
  [key: string]: Types;
};


export const preview = {
  markdown: 'markdown',
  image: 'image',
  pdf: 'pdf',
  video: 'video',
  audio: 'audio',
}

export const extensions: PreviewTypes = {
  gif: 'image',
  jpeg: 'image',
  jpg: 'image',
  png: 'image',
  webp: 'image',

  md: 'markdown',
  mdx: 'markdown',
  markdown: 'markdown',
  mdown: 'markdown',

//   pdf: 'pdf',

  mp4: 'video',
  flv: 'video',
  webm: 'video',
  m3u8: 'video',
  mkv: 'video',
  mov: 'video',
  avi: 'video', // won't work!

//   mp3: 'audio',
//   m4a: 'audio',
//   aac: 'audio',
//   wav: 'audio',
//   ogg: 'audio',
//   oga: 'audio',
//   opus: 'audio',
//   flac: 'audio',
}

export function getPreviewType(extension: string, flags?: { video?: boolean }): string | undefined {
  let previewType = extensions[extension]
  if (!previewType) {
    return previewType
  }

  // Files with '.ts' extensions may be TypeScript files or TS Video files, we check for the flag 'video'
  // to determine what preview renderer to use for '.ts' files.
  if (extension === 'ts') {
    if (flags?.video) {
      previewType = 'video'
    }
  }

  return previewType
}

export function getLanguageByFileName(filename: string): string {
  const extension = getExtension(filename);
  return extension;
}

