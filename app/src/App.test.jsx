import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'

// Contoh test. Tambahkan minimal 5 test buatan sendiri (butir rubrik F1).
test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test ('halaman beranda menampilkan judul aplikasi', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
)
expect(
  screen.getByRole('heading', { name: 'Jurnal Latihan Olahraga'}),
).toBeInTheDocument()
})
test('halaman tentang menampilkan judul', () => {
  render(
    <MemoryRouter initialEntries={['/tentang']}>
      <App />
    </MemoryRouter>
  )
  expect(
    screen.getByRole('heading', {name: /Tentang Aplikasi/i}),
  ).toBeInTheDocument()
})
test('halaman tentang menampilkan informasi mahasiswa', () => {
  render(
    <MemoryRouter initialEntries={['/tentang']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByText(/Nama:/)).toBeInTheDocument()
  expect(screen.getByText(/NIM:/)).toBeInTheDocument()
})

test('halaman tentang menampilkan kelas dan tema', () => {
  render(
    <MemoryRouter initialEntries={['/tentang']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByText('Kelas: RB')).toBeInTheDocument()
  expect(screen.getByText(/Tema: Jurnal Latihan Olahraga/)).toBeInTheDocument()
})

test('halaman tentang memiliki link repositori GitHub', () => {
  render(
    <MemoryRouter initialEntries={['/tentang']}>
      <App />
    </MemoryRouter>,
  )
  expect(
    screen.getByRole('link', { name: /Repositori UTS PAW/i }),
  ).toHaveAttribute('href', 'https://github.com/raisafzlf/uts-paw')
})
