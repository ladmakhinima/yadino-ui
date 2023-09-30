export function uploadSingleFileService(fileData: FormData) {
  return fetch('http://localhost:3000/api/v1/files', {
    method: 'POST',
    body: fileData,
  }).then((response) => response.json());
}
