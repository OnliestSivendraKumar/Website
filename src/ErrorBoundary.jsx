import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('App error:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            padding: '2rem',
            maxWidth: '600px',
            margin: '2rem auto',
            fontFamily: 'system-ui, sans-serif',
            background: 'rgba(11,11,15,0.95)',
            color: '#F4F4F4',
            borderRadius: '12px',
            border: '1px solid rgba(198,167,94,0.3)',
          }}
        >
          <h2 style={{ color: '#C6A75E', marginBottom: '1rem' }}>Something went wrong</h2>
          <pre
            style={{
              overflow: 'auto',
              fontSize: '0.85rem',
              padding: '1rem',
              background: 'rgba(0,0,0,0.4)',
              borderRadius: '8px',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
          >
            {this.state.error?.message || String(this.state.error)}
          </pre>
          <p style={{ marginTop: '1rem', opacity: 0.8 }}>
            Check the browser console (F12) for more details.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
