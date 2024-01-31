# Use an official Rust runtime as a parent image
FROM rust:1.56 as builder

# Set the working directory in the container to /usr/src/app
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Compile the application
RUN cargo build --release

# Start a new build stage so that the final image does not contain the Rust toolchain
FROM debian:buster-slim

# Install OpenSSL (required by many Rust applications at runtime)
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Copy the binary from the builder stage to the final stage
COPY --from=builder /usr/src/app/target/release/devops /usr/local/bin

# Run the application when the container launches
CMD ["devops"]