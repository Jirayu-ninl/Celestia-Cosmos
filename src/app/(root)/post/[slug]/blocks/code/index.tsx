'use client'

import type { PostBlock } from '@types'
// import { POST } from '@/enums'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useUiState } from '@/store'

interface CodeBlockProps {
  code: PostBlock.CodeBlock
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const _dark = useUiState((st) => st.dark)
  return (
    <div className='container px-4 xl:w-[1024px]'>
      <div className='_post-code'>
        <h6>{code.title}</h6>
        {/* <pre className='rounded-md bg-foreground/5 px-10 py-6'>
          <code>{code.code.text}</code>
        </pre> */}
        <div style={{ background: _dark ? '#1d1f21' : '#f5f2f0' }}>
          <SyntaxHighlighter
            language={code.codeLanguage}
            style={_dark ? atomDark : prism}
          >
            {code.code.text}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
