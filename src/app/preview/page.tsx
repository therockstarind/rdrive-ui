"use client"
import { Flex } from '@radix-ui/themes'
import React from 'react'
import { ImagePreview, MarkdownPreview, VideoPreview } from '®/components/FilePreview'
import { Button } from '®/components/ui/button'
import Preview from '®/components/ui/preview'

export default function Home() {
  const [imageOpen, setImageOpen] = React.useState(false);
  const [videoOpen, setVideoOpen] = React.useState(false);
  const [markdownOpen, setMarkdownOpen] = React.useState(false);

  return (
    <Flex gap="4" justify="center" direction="column" mx="auto">
      <Button variant="outline" onClick={() => setImageOpen(true)}>
        Image
      </Button>
      <Preview open={imageOpen} setOpen={setImageOpen}>
        <ImagePreview src="/images/lyra.png" alt='What are you looking 👀..?' />
      </Preview>
      
      <Button variant="outline" onClick={() => setVideoOpen(true)}>
        Video
      </Button>
      <Preview open={videoOpen} setOpen={setVideoOpen}>
        <VideoPreview src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" title='Just Play' />
      </Preview>


      <Button variant="outline" onClick={() => setMarkdownOpen(true)}>
        Markdown
      </Button>
      <Preview open={markdownOpen} setOpen={setMarkdownOpen}>
        <MarkdownPreview src="/sample.md" />
      </Preview>
    </Flex>
  );
}
