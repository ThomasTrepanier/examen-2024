import React from 'react';
import Button from '@mui/material/Button';

export default function Upload() {
  const [file, setFile] = React.useState<File | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<string | null>(null);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const onUpload = async () => {
    if (!file) {
      setError('No file selected');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: file,
      });
      const data = await response.text();
      setResult(data);
    } catch (e: any) {
      setError(e.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Upload</h1>
      <input type="file" onChange={onFileChange} />
      <Button onClick={onUpload}>Upload</Button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {result && <p>Result: {result}</p>}
    </div>
  );
}
