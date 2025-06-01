import { Component } from '@angular/core';
import { marked, MarkedOptions } from 'marked';

@Component({
  selector: 'app-markdown-preview',
  templateUrl: './markdown-preview.component.html',
  styleUrls: ['./markdown-preview.component.scss']
})
export class MarkdownPreviewComponent {
  markdownText: string = '# Welcome to Markdown Previewer!\n\nStart typing **Markdown** on the left.';

  get parsedMarkdown(): string {
    // force synchronous parsing by using 'marked.parse' with 'async: false' option
    return marked.parse(this.markdownText, { async: false }) as string;
  }
}
