'use client'

import React from 'react'
import { AiFillAndroid } from 'react-icons/ai'
import { BsFiletypeGif, BsFillRecordCircleFill, BsImage } from 'react-icons/bs'
import {
  FaBook,
  FaFile,
  FaFileAlt,
  FaFileArchive,
  FaFileAudio,
  FaFileCode,
  FaFileExcel,
  FaFilePdf,
  FaFilePowerpoint,
  FaFileVideo,
  FaFileWord,
  FaFolder,
  FaLink,
  FaMarkdown,
} from 'react-icons/fa'
import { IconType } from 'react-icons/lib'
import { MdInstallDesktop, MdRestorePage } from 'react-icons/md'
import { SiApple, SiJpeg } from 'react-icons/si'

const icons: { [key: string]: IconType } = {
  image: BsImage,
  pdf: FaFilePdf,
  word: FaFileWord,
  powerpoint: FaFilePowerpoint,
  excel: FaFileExcel,
  audio: FaFileAudio,
  video: FaFileVideo,
  archive: FaFileArchive,
  code: FaFileCode,
  text: FaFileAlt,
  file: FaFile,
  folder: FaFolder,
  markdown: FaMarkdown,
  book: FaBook,
  link: FaLink,
  apple: SiApple,
  android: AiFillAndroid,
  windows: BsFillRecordCircleFill,
  recovery: MdRestorePage,
}

const extensions: { [key: string]: IconType } = {
  gif: BsFiletypeGif,
  jpeg: SiJpeg,
  jpg: icons.image,
  png: icons.image,
  heic: icons.image,
  webp: icons.image,

  pdf: icons.pdf,

  doc: icons.word,
  docx: icons.word,

  ppt: icons.powerpoint,
  pptx: icons.powerpoint,

  xls: icons.excel,
  xlsx: icons.excel,

  aac: icons.audio,
  mp3: icons.audio,
  ogg: icons.audio,
  flac: icons.audio,
  oga: icons.audio,
  opus: icons.audio,
  m4a: icons.audio,

  avi: icons.video,
  flv: icons.video,
  mkv: icons.video,
  mp4: icons.video,

  '7z': icons.archive,
  bz2: icons.archive,
  xz: icons.archive,
  wim: icons.archive,
  gz: icons.archive,
  rar: icons.archive,
  tar: icons.archive,
  zip: icons.archive,
  tgz: icons.archive,

  c: icons.code,
  cpp: icons.code,
  js: icons.code,
  jsx: icons.code,
  java: icons.code,
  sh: icons.code,
  cs: icons.code,
  py: icons.code,
  css: icons.code,
  html: icons.code,
  ts: icons.code,
  tsx: icons.code,
  rs: icons.code,
  vue: icons.code,
  json: icons.code,
  yml: icons.code,
  yaml: icons.code,
  toml: icons.code,

  txt: icons.text,
  rtf: icons.text,
  vtt: icons.text,
  srt: icons.text,
  log: icons.text,
  diff: icons.text,

  md: icons.markdown,
  mdx: icons.markdown,

  epub: icons.book,
  mobi: icons.book,
  azw3: icons.book,

  url: icons.link,

  ipsw: icons.apple,
  dmg: icons.apple,
  pkg: icons.apple,

  iso: icons.windows,
  img: icons.recovery,

  exe: MdInstallDesktop,
  msi: MdInstallDesktop,

  apk: icons.android,
}

function getRawExtension(fileName: string): string {
  return fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2)
}

export function getExtension(fileName: string): string {
  return getRawExtension(fileName).toLowerCase()
}

interface Flags {
  video?: boolean
}

function isFolder(fileName: string): boolean {
  return !fileName.includes('.')
}

function getFileIcon(fileName: string, flags?: Flags): IconType {
  if (isFolder(fileName)) {
    return icons.folder
  }

  const extension = getExtension(fileName)
  const icon = extensions[extension] || icons.file

  if (extension === 'ts' && flags?.video) {
    return icons.video
  }

  return icon
}

const FileIcon: React.FC<{ name: string }> = ({ name }) => {
  const IconComponent = getFileIcon(name)

  return IconComponent ? <IconComponent /> : null
}

export default FileIcon
