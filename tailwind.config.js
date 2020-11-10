module.exports = {
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      extend: {
        colors: {
          background: {
            primary: 'var(--bg-background-primary)',
            secondary: 'var(--bg-background-secondary)',
            tertiary: 'var(--bg-background-tertiary)',
    
            form: 'var(--bg-background-form)',
          },
    
          copy: {
            primary: 'var(--text-copy-primary)',
            secondary: 'var(--text-copy-hover)',
          },
    
          'border-color': {
            primary: 'var(--border-border-color-primary)',
          },
    
          transparent: 'transparent',
    
          black: '#000',
          white: '#fff',
          
          gray: {
            100: '#f7fafc',
            200: '#edf2f7',
            300: '#e2e8f0',
            400: '#cbd5e0',
            500: '#a0aec0',
            600: '#718096',
            700: '#4a5568',
            800: '#2d3748',
            900: '#1a202c',
          },

          orange: {
            100: '#fffaf0',
            200: '#feebc8',
            300: '#fbd38d',
            400: '#f6ad55',
            500: '#ed8936',
            600: '#dd6b20',
            700: '#c05621',
            800: '#9c4221',
            900: '#7b341e',
          }
        },
        fontFamily: {
          sans: [
            'Poppins',
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
          ],
          serif: ['DM Serif Display', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
          mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        },
        spacing: {
          '80': '20rem',
          '108': '27rem',
        },
      },
    },
    variants: {},
    plugins: [],
  }
  